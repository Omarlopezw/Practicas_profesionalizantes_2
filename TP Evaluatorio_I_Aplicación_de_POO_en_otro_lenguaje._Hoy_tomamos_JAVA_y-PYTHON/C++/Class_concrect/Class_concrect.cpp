#include <iostream>
#include <fstream>
using namespace std;
class AudioPlayer
{
public:
AudioPlayer()
{
    cout << "The AudioPlayer constructor was invoked." << endl;
    isOpen = false;
    isPlaying = false;
    setVolume(10);
}
~AudioPlayer()
{
    cout << "The AudioPlayer destructor was invoked." << endl;
}
void open(string filePath)
{
    //@ToDo: por ahora simulamos la apertura correcta
    isOpen = true;
    cout << "The audiofile: " << filePath << " is open." << endl;
}
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
private:
    bool isOpen;
    bool isPlaying;
    float volume;
};

class VLC : public AudioPlayer
{
public:
VLC()
{
    cout << "The VLC constructor was invoked." << endl;
    setVolume(10);
    setPitch(0);
}
~VLC()
{
    cout << "The VLC destructor was invoked." << endl;
}
void setPitch(float value)
{
    pitch = value;
    cout << "The pitch value is: " << pitch << endl;
}
    float pitch;
};
int main()
{
    cout << endl;
AudioPlayer player;
    player.open("./resources/orchestral.ogg");

    player.play();

    player.setVolume(4);
    
    cout << endl;
VLC vlcPlayer;
    vlcPlayer.open("./resources/orchestral.ogg");

    vlcPlayer.play();

    vlcPlayer.setVolume(13);

    cout << endl;
    
    return EXIT_SUCCESS;
}