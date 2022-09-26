from abc import ABC, abstractmethod 

#Player abstract class
class Player(ABC):

    def __init__(self):

        print("The Player constructor was invoked.")
        self.isOpen = False;
        self.isPlaying = False;
        self.setVolume(10);

    def __del__(self):

        print("The Player destructor was invoked.")

    #método abstracto o virtual puro:
    def open(self, filePath):
        pass

    def play(self):

        #@ToDo: por ahora simulamos la reproducción correcta
        if(self.isOpen) : self.isPlaying = True;
        print("The audiofile is playing.")

    def stop(self):

        #@ToDo: por ahora simulamos la detención correcta
        if(self.isPlaying) : self.isPlaying = False;
        print("The audiofile is stopped.")

    def setVolume(self, value):

        self.volume = value;
        print("The volume value is: " + str(self.volume))

#VLC concrete class
class VLC(Player):

    def __init__(self):

        print("The VLC constructor was invoked.")

    def __del__(self):

        print("The VLC destructor was invoked.")

    def open(self, filePath):

        #@ToDo: por ahora simulamos la apertura correcta
        self.isOpen = True;
        print("The audiofile: " + filePath + " is open.")

    def setPitch(self, value):

        self.pitch = value;
        print("The pitch value is: " + str(self.pitch))

#Winamp concrete class
class Winamp(Player):


    def __init__(self):

        print("The Winamp constructor was invoked.")

    def __del__(self):

        print("The Winamp destructor was invoked.")

    def open(self, filePath):

        #@ToDo: por ahora simulamos la apertura correcta
        self.isOpen = True;
        print("The audiofile: " + filePath + " is open.")



    #NO SE PUEDE CREAR UN OBJETO O INSTANCIA DE UNA CLASE ABSTRACTA:
    #Player player;//NO!

vlcPlayer = VLC()
vlcPlayer.open("./resources/orchestral.ogg");
vlcPlayer.play();
vlcPlayer.setVolume(13);


winampPlayer = Winamp()

winampPlayer.open("./resources/orchestral.ogg");
winampPlayer.play();
winampPlayer.setVolume(13);

