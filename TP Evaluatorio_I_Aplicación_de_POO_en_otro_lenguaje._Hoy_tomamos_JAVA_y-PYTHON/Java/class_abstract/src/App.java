abstract class Player
{
Player()
{
    System.out.println("The Player constructor was invoked.");
    isOpen = false;
    isPlaying = false;
    setVolume(10);
}

//método abstracto o virtual puro:
public abstract void open(String filePath);

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
    protected boolean isOpen;//Protegido para poder ser modificado por la subclase
    private boolean isPlaying;
    private float volume;
};

//VLC concrete class
class VLC extends Player
{
VLC()
{
    System.out.println("The VLC constructor was invoked.");
}
public void open(String filePath)
{
    //@ToDo: por ahora simulamos la apertura correcta
    isOpen = true;
    System.out.println("The audiofile: " + filePath + " is open.");
}
void setPitch(float value)
{
    pitch = value;
    System.out.println("The pitch value is: " + pitch);
}
    private float pitch;
};

//Winamp concrete class
class Winamp extends Player
{
Winamp()
{
    System.out.println("The Winamp constructor was invoked.");
}
public void open(String filePath)
{
    //@ToDo: por ahora simulamos la apertura correcta
    isOpen = true;
    System.out.println("The audiofile: " + filePath + " is open.");
}
};




public class App 
{
    public static void main(String[] args) throws Exception 
    {
        //NO SE PUEDE CREAR UN OBJETO O INSTANCIA DE UNA CLASE ABSTRACTA:
        //Player player;//NO!
        VLC vlcPlayer = new VLC();

        vlcPlayer.open("./resources/orchestral.ogg");
        vlcPlayer.play();
        vlcPlayer.setVolume(13);

        Winamp winampPlayer = new Winamp();
        winampPlayer.open("./resources/orchestral.ogg");
        winampPlayer.play();
        winampPlayer.setVolume(13);
    }
}
