const CACHE = "meu-ticket-v1";

self.addEventListener(
    "install",
    function(event) {

        event.waitUntil(
            caches.open(CACHE)
            .then(function(cache) {

                return cache.addAll([
                    "./",
                    "./index.html",
                    "./manifest.json"
                ]);

            })
        );

    }
);
