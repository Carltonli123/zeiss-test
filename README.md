# ZeissTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Docker

Docker file has been prepared. What I have run successfully on my local computer was:

`docker build -t zeiss-test-image .  `

`docker run -dp 3200:80 zeiss-test-image  `




After the app is started, it will look like this:
<img width="1777" alt="image" src="https://user-images.githubusercontent.com/15841436/167963686-a5a975be-3eb5-46df-b47c-961ac3c860b4.png">
Clicking on "Show Events" will look like this:
<img width="1791" alt="image" src="https://user-images.githubusercontent.com/15841436/167963833-f257ac97-73be-4018-af1e-30e9b5156fed.png">
The WebSocket Feed will be reflected on the **page** as well as **console log** :
<img width="1785" alt="image" src="https://user-images.githubusercontent.com/15841436/167964116-811ecfc8-ffb1-461b-a414-2fa0f7746168.png">
