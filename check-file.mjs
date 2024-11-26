import fs from 'fs/promises';
import path from 'path';

async function checkFile() {
    const filePath = path.join(process.cwd(), 'public', 'cv-miguel-gil.pdf');

    try {
        // Check if file exists
        await fs.access(filePath, fs.constants.F_OK);
        console.log(`File exists at: ${filePath}`);

        // Check read permissions
        await fs.access(filePath, fs.constants.R_OK);
        console.log('File is readable');

        // Get file stats
        const stats = await fs.stat(filePath);
        console.log('File size:', stats.size, 'bytes');
        console.log('File permissions:', stats.mode.toString(8).slice(-3));

        // Try to read the first few bytes of the file
        const fd = await fs.open(filePath, 'r');
        const buffer = Buffer.alloc(10);
        const { bytesRead } = await fd.read(buffer, 0, 10, 0);
        await fd.close();

        console.log(`Successfully read ${bytesRead} bytes from the file`);
        console.log('File is accessible and readable');
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('File does not exist');
        } else if (error.code === 'EACCES') {
            console.error('Permission denied: Cannot read file');
        } else {
            console.error('Error accessing file:', error);
        }
    }
}

checkFile();