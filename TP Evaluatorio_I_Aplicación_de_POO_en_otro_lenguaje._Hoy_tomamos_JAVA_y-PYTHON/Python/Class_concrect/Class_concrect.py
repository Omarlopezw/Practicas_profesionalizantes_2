class AudioPlayer:

    

    def __init__(self):

        print("The AudioPlayer constructor was invoked.") 
        self.isOpen = False;
        self.isPlaying = False;
        self.setVolume(10);

    def __del__(self):

        print("The AudioPlayer destructor was invoked.")

    def open(self,filePath):

        #@ToDo: por ahora simulamos la apertura correcta
        self.isOpen = True;
        print("The audiofile: " + filePath + " is open.")

    def play(self):

        #@ToDo: por ahora simulamos la reproducción correcta
        if(self.isOpen) : self.isPlaying = True;
        print("The audiofile is playing.")

    def stop(self):

        #@ToDo: por ahora simulamos la detención correcta
        if(__isPlaying) : __isPlaying = False;
        print("The audiofile is stopped.")

    def setVolume(self, xd):

        self.volume = xd
        print("The volume value is: " + str(self.volume))


class VLC(AudioPlayer):

    def __init__(self):

        print("The VLC constructor was invoked.")
        self.setVolume(10);
        self.setPitch(0);

    def __del__(self):

        print("The VLC destructor was invoked.") 

    def setPitch(self, value):

        self.pitch = value;
        print("The pitch value is: " + str(self.pitch))

        

player = AudioPlayer()

player.open("./resources/orchestral.ogg");

player.play();

player.setVolume(4);

vlcPlayer = VLC()

vlcPlayer.open("./resources/orchestral.ogg");

vlcPlayer.play();

vlcPlayer.setVolume(13);

