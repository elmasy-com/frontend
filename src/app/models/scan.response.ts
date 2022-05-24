export interface ScanResponse {
  target: string;
  tls: TLS[];
}

export interface TLS {
  version: string;
  supported: boolean;
  ciphers: Cipher[];
}

export interface Cipher {
  Name: string;
  Security: Security;
}

export enum Security {
  Weak = 'weak',
  Secure = 'secure',
  Insecure = 'insecure',
  Recommended = 'recommended',
}
