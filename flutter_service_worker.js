'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "95cbe41e0597f6d98498402606e5f97d",
"assets/assets/cloud.jpeg": "2740bfc9a070a73342ba145dbaf3eab3",
"assets/assets/data/lightning/background.jpg": "576631a551a52763a10d477b37d35de7",
"assets/assets/data/lightning/carovy.jpg": "ea153ed5148fbf78dfbd86ce7d8932d0",
"assets/assets/data/lightning/elias.jpg": "8c8155bdd09e5b99286932608844e338",
"assets/assets/data/lightning/kulovy.jpg": "69a48c79f8979545e80677411ad7f1f7",
"assets/assets/data/lightning/plosny.jpg": "d4c6d69461e92a5a93f0d281df232136",
"assets/assets/data/lightning/storm.png": "a2b95a75ba592d6c7b8b0c6419f85276",
"assets/assets/data/wind/anemometr.jpg": "133b13ea2684affcf4b69106e9d50595",
"assets/assets/data/wind/tlakova_vyse_nize.png": "a87b9f7a617c59518f342b430c156672",
"assets/assets/gallery/roudnice/cockpit1.jpg": "a0e9b13acb4ff815ffe63901fc0268bb",
"assets/assets/gallery/roudnice/glider_tractor.jpg": "b7914f950d91a60716a5e0e64b99c39a",
"assets/assets/gallery/roudnice/hangar0.jpg": "6bf6a48289e688b496f848fb435c7c5a",
"assets/assets/gallery/roudnice/hangar1.jpg": "cc55a6bd1714e7f966f7d8af08a72f46",
"assets/assets/gallery/roudnice/helicopter_rotor.jpg": "94eca304800499936d5365929d439284",
"assets/assets/gallery/roudnice/propeller_plane0.jpg": "538dc0a04ea2dc975d8f41e081501886",
"assets/assets/gallery/roudnice/propeller_plane1.jpg": "0dfbe8f2a4b40997143ee25943529c87",
"assets/assets/gallery/roudnice/propeller_plane2.jpg": "2aa59bb7bc600e5e9b2b00f6b48a11ad",
"assets/assets/gallery/roudnice/propeller_plane3.jpg": "4391467797ec145955a3dfc7bf3ec7b6",
"assets/assets/gallery/roudnice/propeller_plane4.jpg": "6e4c90cc77f0bf4756f7aabf9849e83a",
"assets/assets/gallery/roudnice/traffic_tower0.jpg": "344b9e1b32f31c7dc609ca1689544406",
"assets/assets/gallery/roudnice/traffic_tower1.jpg": "d819ee0bb3c82672789a54f75b6a5a66",
"assets/assets/gallery/ruzyne/hajek_v_letadle.jpeg": "d60c483f3aaf04d9d581c14f38a642ff",
"assets/assets/gallery/ruzyne/kabina_letadla.jpg": "65735f1c2ff0fc025b0f01505a2f46a6",
"assets/assets/gallery/ruzyne/klouzacka.jpg": "d87f675c6a7c7884e3d821865f5a381b",
"assets/assets/gallery/ruzyne/kokpit.jpg": "8c0eb3ee0671ba676680fcf9ec4ebb86",
"assets/assets/gallery/ruzyne/mimon.jpeg": "77247712a4f2b47c27b5cbd8652bed18",
"assets/assets/gallery/ruzyne/mimoni_v_bilem.jpg": "0253d8cff0eecd9c8469038ed5c2812c",
"assets/assets/gallery/ruzyne/mistnost_s_trenazery.jpg": "c4d5686e258600cbfa2f0df16fe0c959",
"assets/assets/gallery/ruzyne/okinko_letadla.jpg": "4de09166892e3328bc2614a7ad5dd84e",
"assets/assets/gallery/ruzyne/pristavani.jpg": "1267e2225b7a2b344a052ebbda72bfbd",
"assets/assets/gallery/ruzyne/romance_v_letadle.jpeg": "f54263f11a1920fce796f9e20520be40",
"assets/assets/gallery/ruzyne/stabilni_trenazer.jpg": "d3fad5eb9068fdf352dea4e2488f6925",
"assets/assets/gallery/ruzyne/stare_letadlo.jpg": "96550801d0a51df8d40628636d6dd8b6",
"assets/assets/gallery/ruzyne/trenazer.jpeg": "1942039465a001ce1f4baef83e2e8ba8",
"assets/assets/gallery/ruzyne/trenazer.jpg": "0054b7e15e8a5205f6e42c31684e05d7",
"assets/assets/gallery/ruzyne/trenazer320.jpg": "fb0e33453ae43dcfd2d9124ac76d86d1",
"assets/assets/gallery/ruzyne/trenazer738.jpg": "eb43e5b21d638d80c0dca17d49063714",
"assets/assets/gallery/ruzyne/trenazer73M.jpg": "41b3a9bf101a991919fb31ea710d54a9",
"assets/assets/gallery/ruzyne/uvnitr_trenazeru.jpg": "3b39e97b7db2e0bbf2aa863018dd8b45",
"assets/assets/gallery/video/video1.png": "54d1b8fc04529e648a052058905a1b13",
"assets/assets/gallery/video/video2.png": "880539839d40918a7f85048590849576",
"assets/assets/gallery/video/video3.png": "0ba10a49fa7de09d8184121e84206c08",
"assets/assets/gallery/video/video4.png": "fc6a411b2a590700ecd369c3518cc695",
"assets/assets/gallery/video/video5.png": "f198218e00afa3b14128504f404197c8",
"assets/assets/gallery/video/videoAll.png": "45be8111a523a6b3f8e8befd6ba28ac0",
"assets/assets/icons/home.svg": "99d51e04e8416169fe52f85e74052826",
"assets/assets/icons/icon.jpeg": "14026db9f30e9a2b8b6cadfd9d56d759",
"assets/assets/icons/icon.png": "9aab8679c98772cc11c81f6296edabd7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e057ad401dbcd1619449889e291b3a03",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icon.png": "9aab8679c98772cc11c81f6296edabd7",
"icons/icon.png": "9aab8679c98772cc11c81f6296edabd7",
"index.html": "38724d1ff57638885e2c16dd8c18e920",
"/": "38724d1ff57638885e2c16dd8c18e920",
"main.dart.js": "b4bb45fd635857e85b76678b0be76509",
"manifest.json": "fdb09a93da118e4400bf57c29830f4f0",
"version.json": "fa1e20dfbe231f07b7a62ebc26c95fa3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
