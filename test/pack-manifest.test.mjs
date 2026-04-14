import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const manifest = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'));

test('extensionPack lists three SFMC extensions in order', () => {
    assert.deepStrictEqual(manifest.extensionPack, [
        'joernberkefeld.sfmc-data',
        'Accenture-oss.sfmc-devtools-vscode',
        'joernberkefeld.sfmc-language',
    ]);
});

test('icon path points at bundled asset', () => {
    assert.equal(manifest.icon, 'resources/images/pack-v2-transparent-256.png');
});
