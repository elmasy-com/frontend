export interface ScanResponse {
  target: string;
  tls: TLS[];
}

export interface TLS {
  version: string;
  supported: boolean;
  ciphers: string[];
}
