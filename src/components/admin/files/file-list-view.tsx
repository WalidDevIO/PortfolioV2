import { getFiles } from "@/actions/getFiles";
import { FileList } from "./file-list";

export async function FileListView() {
    const files = await getFiles();

    return <div>
        <FileList initialFiles={files} />
    </div>
}