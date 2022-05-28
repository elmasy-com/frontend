export interface Cipher {
  name: string;
  security: Security;
}

export enum Security {
  Weak = 'weak',
  Secure = 'secure',
  Insecure = 'insecure',
  Recommended = 'recommended',
}

export interface ScanResult {
  domain: string;
  targets: Target[];
  errors: string[];
}

export interface Target {
  ip: string;
  tls: TLS;
}

export interface TLS {
  version: TLSVersion[];
  cert: Cert;
}

export interface TLSVersion {
  version: string;
  supported: boolean;
  ciphers: Cipher[];
}

export interface Cert {
  commonName: string;
  hash: string;
  alternativeNames: string[];
  signatureAlgorithm: string;
  publicKey: PublicKey;
  serialNumber: string;
  issuer: string;
  notBefore: string;
  notAfter: string;
  verified: boolean;
  verifiedError: string;
  chain: Chain[];
}

export interface Chain {
  commonName: string;
  hash: string;
  notAfter: string;
  issuer: string;
  publicKey: PublicKey;
  signatureAlgorithm: string;
}

export interface PublicKey {
  algo: string;
  size: number;
  key: string;
  exponent: number;
  modulus: string;
}
