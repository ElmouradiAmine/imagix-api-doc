define({ "api": [
  {
    "type": "get",
    "url": "/user/activate/:token",
    "title": "Activate user's account.",
    "version": "0.2.0",
    "name": "ActivateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>client activation account token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "204",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User id not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>client not allowed to change password.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>An error has occured.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response-UserNotFound:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-AccessDenied:",
          "content": "HTTP/1.1 401 Not Activated\n{\n  \"error\": \"AccessDenied\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-AccountNotActivated:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"BadRequest\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/user/activateUser.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get user information.",
    "version": "0.2.0",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"5f2876a1b1df058383363a9d\",\n  \"username\": \"Amine Elmouradi\",\n  \"email\": \"elmouradi.amine98@gmail.com\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User id not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>client not allowed to change password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response-UserNotFound:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-AccessDenied:",
          "content": "HTTP/1.1 401 Not Activated\n{\n  \"error\": \"AccessDenied\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/user/getUser.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login the user and send the token to client.",
    "version": "0.2.0",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..255",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..1024",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"elmouradi.amine98@gmail.com\",\n     \"password\": \"aminetest1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of the user for authentication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": \"5f2876a1b1df058383363a9d\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjI4NzZhMWIxZGYwNTgzODMzNjNhOWQiLCJpYXQiOjE1OTY0OTIzNzR9.AOZYQoJneb_jPFZA12iwBC0FcNAgh-W97G9jzUXN03U\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongCredentiels",
            "description": "<p>Email or password is wrong.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccountNotActivated",
            "description": "<p>Email already in use but not activated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response-WrongCredentiels:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"WrongCredentiels\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-AccountNotActivated:",
          "content": "HTTP/1.1 400 Not Activated\n{\n  \"error\": \"AccountNotActivated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/user/loginUser.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login the user and send back the token.",
    "version": "0.1.0",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..255",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..1024",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"elmouradi.amine98@gmail.com\",\n     \"password\": \"aminetest1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of the user for authentication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": \"5f2876a1b1df058383363a9d\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjI4NzZhMWIxZGYwNTgzODMzNjNhOWQiLCJpYXQiOjE1OTY0OTIzNzR9.AOZYQoJneb_jPFZA12iwBC0FcNAgh-W97G9jzUXN03U\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongCredentiels",
            "description": "<p>Email or password is wrong.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentiels",
            "description": "<p>Email or password is in the wrong format.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response-WrongCredentiels:",
          "content": "HTTP/1.1 401 Access Denied\n{\n  \"error\": \"WrongCredentiels\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-InvalidCredentiels:",
          "content": "HTTP/1.1 400 Bad Format\n{\n  \"error\": \"InvalidCredentiels\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "Register the user and send activation email to client.",
    "version": "0.2.0",
    "name": "RegisterUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..255",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..255",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..1024",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"username\": \"Amine Elmouradi\",\n  \"email\": \"elmouradi.amine98@gmail.com\",\n     \"password\": \"aminetest1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>ID of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": \"5f2876a1b1df058383363a9d\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailAlreadyInUse",
            "description": "<p>Email or password is wrong.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentiels",
            "description": "<p>Email or password is in the wrong format.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccountNotActivated",
            "description": "<p>Email already in use but not activated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response-EmailAlreadyInUse:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"EmailAlreadyInUse\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-InvalidCredentiels:",
          "content": "HTTP/1.1 400 Bad Format\n{\n  \"error\": \"InvalidCredentiels\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-AccountNotActivated:",
          "content": "HTTP/1.1 400 Not Activated\n{\n  \"error\": \"AccountNotActivated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/user/registerUser.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "Register the user",
    "version": "0.1.0",
    "name": "RegisterUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..255",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..255",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..1024",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"username\": \"Amine Elmouradi\",\n  \"email\": \"elmouradi.amine98@gmail.com\",\n     \"password\": \"aminetest1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>ID of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": \"5f2876a1b1df058383363a9d\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailAlreadyInUse",
            "description": "<p>Email or password is wrong.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentiels",
            "description": "<p>Username, Email or password is wrong.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response-EmailAlreadyInUse:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"EmailAlreadyInUse\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-InvalidCredentiels:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"InvalidCredentiels\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/user/:id",
    "title": "Update user's username or password.",
    "version": "0.2.0",
    "name": "UpdateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..255",
            "optional": true,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..1024",
            "optional": true,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"username\": \"Amine Elmouradi\",\n  \"email\": \"elmouradi.amine98@gmail.com\",\n     \"password\": \"aminetest1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "204",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User id not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>client not allowed to change password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response-UserNotFound:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-AccessDenied:",
          "content": "HTTP/1.1 401 Not Activated\n{\n  \"error\": \"AccessDenied\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/user/updateUser.js",
    "groupTitle": "User"
  }
] });
