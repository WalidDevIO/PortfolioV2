import { FileListView } from "@/components/admin/files/file-list-view";
import { Loader } from "@/components/general/loader";
import { Suspense } from "react";

export default function FilesPage() {
    return <div className="max-w-4xl w-full">
        <Suspense fallback={<Loader />}>
            <FileListView />
        </Suspense>
    </div>
}