var audio_ctx = new (window.webkitAudioContext||window.AudioContext)()

var songBuffers = []
function registerSong(songBuffer) {
    return songBuffers.push(songBuffer) - 1
}

var soundBuffers = []
function registerSound(soundBuffer) {
    return soundBuffers.push(soundBuffer) - 1
}

function audio_init(callback) {
	sonantxr_generate_song(audio_ctx, music_dark_meat_beat, function(buffer){
		audio_play(buffer, true);
		callback();
	});
	sonantxr_generate_sound(audio_ctx, sound_shoot, 140, function(buffer){
		audio_sfx_shoot = buffer;
	});
	
};

function audio_play(buffer, loop) {
	var source = audio_ctx.createBufferSource();
	source.buffer = buffer;
	source.loop = loop;
	source.connect(audio_ctx.destination);
	source.start();
};