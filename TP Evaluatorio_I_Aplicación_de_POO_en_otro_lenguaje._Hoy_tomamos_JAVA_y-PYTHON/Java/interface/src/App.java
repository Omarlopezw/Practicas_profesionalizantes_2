//Player Interface:
interface Player
{
    public void open(String filePath);
    public void play();
    public void stop();
    public void setVolume(float value);
};
//PlayerPitchable Interface:
interface PlayerPitchable 
{
    
    public void setPitch(float pitch);
};

//VLC concrete class
class VLC implements Player,PlayerPitchable
{
VLC()
{
    System.out.println("The VLC constructor was invoked.");
    isOpen = false;
    isPlaying = false;
    setVolume(10);
}
public void open(String filePath)
{
    //@ToDo: por ahora simulamos la apertura correcta
    isOpen = true;
    System.out.println("The audiofile: " + filePath + " is open.");
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
public void setPitch(float value)
{
    pitch = value;
    System.out.println("The pitch value is: " + pitch);
}
    private boolean isOpen;
    private boolean isPlaying;
    private float volume;
    private float pitch;
};

public class App 
{
    public static void main(String[] args) throws Exception 
    {
       //NO SE PUEDE CREAR UN OBJETO O INSTANCIA DE UNA INTERFAZ:
        //Player player;//NO!
        VLC vlcPlayer = new VLC();
        vlcPlayer.open("./resources/orchestral.ogg");
        vlcPlayer.play();
        vlcPlayer.setVolume(13);
    }
}
