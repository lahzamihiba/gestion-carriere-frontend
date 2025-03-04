//modele pour gerer les information de keycloak

export interface UserProfile{
    username?:String;
    email?:String;
    firstName?:String;
    lastName?:String;
    token?:String;
}