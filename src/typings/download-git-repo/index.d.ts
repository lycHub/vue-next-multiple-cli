import ErrnoException = NodeJS.ErrnoException;

function download(source: string, dest: string, opts: { clone: boolean; }, callback: (err: ErrnoException | null) => void): void;
function download(source: string, dest: string, callback: (err: ErrnoException | null) => void): void;

declare module 'download-git-repo' {
  export default download;
}
