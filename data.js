var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.2793050098284233,
        "pitch": -0.03492712681558885,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.07085606897916108,
          "pitch": -0.28409269945417215,
          "rotation": 19.63495408493622,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.10376614464781753,
          "pitch": 0.2690381764050489,
          "title": "Welcome!",
          "text": "To the Faculty of Engineering!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.32337799874800055,
        "pitch": -0.08822031763180327,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.031158257430256242,
          "pitch": -0.009392064889292229,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.7402345852144911,
          "pitch": -0.08548884803127521,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1703387912123375,
          "pitch": -0.3805795542756254,
          "title": "A sculpture",
          "text": "Of something"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.0780757118537014,
        "pitch": 0.023893732832846126,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.936845362536431,
          "pitch": -0.062459730254747825,
          "rotation": 3.9269908169872414,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6775729994022281,
          "pitch": 0.09482014912356185,
          "title": "Yummy coffee!",
          "text": "Try out their cookies too!"
        },
        {
          "yaw": 2.189561858483591,
          "pitch": 0.2303476327305809,
          "title": "Study spaces",
          "text": "For serial muggers"
        }
      ]
    }
  ],
  "name": "Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
