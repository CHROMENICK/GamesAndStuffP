var bareServers = ["bare1"];
var bareDomain = "https://" + bareServers[Math.floor(Math.random() * bareServers.length)] + "." + self.location.hostname + "/bare/";

self.__uv$config = {
    prefix: '/reviews/',
    bare: bareDomain,
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/sw.js',
};
