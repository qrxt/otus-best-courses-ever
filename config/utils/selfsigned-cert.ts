import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createCA, createCert } from 'mkcert';

const ca = await createCA({
  organization: '',
  countryCode: 'RU',
  state: '',
  locality: '',
  validity: 365,
});

const cert = await createCert({
  ca: { key: ca.key, cert: ca.cert },
  domains: ['127.0.0.1', 'localhost'],
  validity: 365,
});

await writeFile(path.join(import.meta.dirname, '..', 'cert.cert'), cert.cert);
await writeFile(path.join(import.meta.dirname, '..', 'cert.key'), cert.key);
