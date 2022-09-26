#include <iostream>
#include <fstream>
using namespace std;
//Player abstract class
class Player
{
public:
Player()
{
    cout << "The Player constructor was invoked." << endl;
    isOpen = false;
    isPlaying = false;
    setVolume(10);
}
~Player()
{
cout << "The Player destructor was invoked." << endl;
}
//método abstracto o virtual puro:
    virtual void open(string filePath) = 0;
void play()
{
    //@ToDo: por ahora simulamos la reproducción correcta
    if(isOpen) isPlaying = true;
    cout << "The audiofile is playing." << endl;
}
void stop()
{
    //@ToDo: por ahora simulamos la detención correcta
    if(isPlaying) isPlaying = false;
    cout << "The audiofile is stopped." << endl;
}
void setVolume(float value)
{
    volume = value;
    cout << "The volume value is: " << volume << endl;
}
protected:
    bool isOpen;//Protegido para poder ser modificado por la subclase
private:
    bool isPlaying;
    float volume;
};

//VLC concrete class
class VLC : public Player
{
public:
VLC()
{
    cout << "The VLC constructor was invoked." << endl;
}
~VLC()
{
    cout << "The VLC destructor was invoked." << endl;
}
void open(string filePath)
{
    //@ToDo: por ahora simulamos la apertura correcta
    isOpen = true;
    cout << "The audiofile: " << filePath << " is open." << endl;
}
void setPitch(float value)
{
    pitch = value;
    cout << "The pitch value is: " << pitch << endl;
}
private:
    float pitch;
};

//Winamp concrete class
class Winamp : public Player
{
public:
Winamp()
{
    cout << "The Winamp constructor was invoked." << endl;
}
~Winamp()
{
    cout << "The Winamp destructor was invoked." << endl;
}
void open(string filePath)
{
    //@ToDo: por ahora simulamos la apertura correcta
    isOpen = true;
    cout << "The audiofile: " << filePath << " is open." << endl;
}
};

int main()
{
    //NO SE PUEDE CREAR UN OBJETO O INSTANCIA DE UNA CLASE ABSTRACTA:
    //Player player;//NO!
    VLC vlcPlayer;
    cout << endl;
    vlcPlayer.open("./resources/orchestral.ogg");
    vlcPlayer.play();
    vlcPlayer.setVolume(13);
    cout << endl;
    cout << endl;

    Winamp winampPlayer;
    cout << endl;
    winampPlayer.open("./resources/orchestral.ogg");
    winampPlayer.play();
    winampPlayer.setVolume(13);
    cout << endl;
return EXIT_SUCCESS;
}