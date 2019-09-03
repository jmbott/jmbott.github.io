# Project Archive

## local test

* check your computer's ip,

```
$ ifconfig | grep inet
```

or

```
$ ipconfig getifaddr <interface>
192.168.1.157
```

where the interface is what you are using to connect locally, ex: `wlan0` or `en0`

* run local http server,

```
$ python3 -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

* navigate to `localhost:8000` or on another device `192.168.1.157:8000` where
  the IP is your own found earlier.
