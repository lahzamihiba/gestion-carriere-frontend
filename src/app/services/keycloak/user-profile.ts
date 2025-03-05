export interface UserProfile {
  username?: string;  // Nom d'utilisateur, facultatif
  email?: string;     // Email de l'utilisateur, facultatif
  firstName?: string; // Prénom de l'utilisateur, facultatif
  lastName?: string;  // Nom de famille de l'utilisateur, facultatif
  token?: string;     // Jeton d'authentification, facultatif
}
