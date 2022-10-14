# OneBeyond App

## How to launch the app on emulated devices:

- Download this repository
- Open two terminals and navigate to main directory to this project.
- In first terminal -> run command: `yarn` in the main directory to install package.json dependencies
- To instal cocoapods in iOS, run this command in main directory: `cd ios && pod install && cd ..` 
- **IMPORTANT:** If you are using a Mac M1 or M2 you will must have some changes in your personal config. You must use Apple’s Rosetta 2. Check this guide : https://medium.com/@alberto.schiabel/how-to-fix-pod-install-error-in-react-native-on-mac-m1-5d79dc52f7e8
- Set local.properties on Andriod if not set automatically with Android Studio.
- In first terminal where you installed before cocoapods, run command: `Yarn start` to init metro bundle.
- On second terminal (project folder) run `yarn ios` or `yarn android` to see the project in emulator.
- If you want to test a component: Execute `yarn test` on terminal (main directory) to test ProjectCard component.

### Important Code Challenge points
- [X] Data is received from a REST API created by me (https://github.com/Phector27/herokuphones) and deployed on heroku.
- [X] Registration and login available
- [X] Administrator role to perform full CRUD functions with data within the application.
- [X] JWT to secure the requests
- [X] API developed in NodeJS
- [X] Front developed with Typescript and Redux-Saga
- [X] Component testing with Jest
- [X] Persistence layer: MongoDB DDBB used
- [X] CD/CI in the backend. Github linked to heroku for continuous and automated deployment.
- [ ] App is not deployed in App Store / Google Play because my actual developer account in both tools is under my actual company. But I'm responsable to create and upload apps in theirs stores. This is not a problem, but I have not a personal account. Only by company.

**This app is available in both OS (Android - iOS), and is compatible with iPads :)**

## This is the final result with an admin user (iPad 12.9 - iPhone 14 - iPad Mini):
![ezgif com-gif-maker](https://user-images.githubusercontent.com/65594529/195928039-8f8d817a-0f2b-4a62-8da0-e8733714d49a.gif)


## And not admin user (iPad 12.9 - iPhone 14 - iPad Mini):
![onebeyond](https://user-images.githubusercontent.com/65594529/195923774-96493184-dbc4-4bc3-a2d5-affb4e7663ad.gif)


## Result testing app on Android and iOS (iPhone 14 - Pixel 5) :
![onebeyondiosandroid](https://user-images.githubusercontent.com/65594529/195923849-83c983ed-cf78-47ad-a9e4-1ee4d1358451.gif)


## Héctor Carramiñana Ramos.
