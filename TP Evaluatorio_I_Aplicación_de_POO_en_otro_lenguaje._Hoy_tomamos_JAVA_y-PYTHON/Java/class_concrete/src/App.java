
class AudioPlayer
{
public AudioPlayer()
{
    System.out.println("The AudioPlayer constructor was invoked.");
    isOpen = false;
    isPlaying = false;
    setVolume(10);
}
public void open(String filePath)
{
    //@ToDo: por ahora simulamos la apertura correcta
    isOpen = true;
    System.out.println( "The audiofile: " + filePath + " is open." );
}
public void play()
{
    //@ToDo: por ahora simulamos la reproducción correcta
    if(isOpen) isPlaying = true;
    System.out.println("The audiofile is playing.");
}
public void stop()
{
    //@ToDo: por ahora simulamos la detención correcta
    if(isPlaying) isPlaying = false;
    System.out.println("The audiofile is stopped.");
}
public void setVolume(float value)
{
    volume = value;
    System.out.println("The volume value is: " + volume);
}
    private boolean isOpen;
    private boolean isPlaying;
    private  float volume;
}
class VLC extends AudioPlayer
{
public VLC()
{
    System.out.println("The VLC constructor was invoked."); 
    setVolume(10);
    setPitch(0);
}
public void setPitch(float value)
{
    pitch = value;
    System.out.println("The pitch value is: " + pitch);
}
float pitch;
};

public class App 
{
    public static void main(String[] args) throws Exception 
    {
        AudioPlayer player = new AudioPlayer();
        player.open("./resources/orchestral.ogg");
        player.play();
        player.setVolume(4);

        VLC vlcPlayer = new VLC();
        vlcPlayer.open("./resources/orchestral.ogg");
        vlcPlayer.play();
        vlcPlayer.setVolume(13);

    }
}
