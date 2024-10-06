"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { Loader } from "@/components/general/loader";

interface File {
  id: string;
  name: string;
}

export function FileList() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await fetch("/api/file");
      if (!response.ok) throw new Error("Erreur lors de la récupération des fichiers");
      const { data } = await response.json();
      setFiles(data);
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (name: string) => {
    try {
        const response = await fetch(`/api/file/${name}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error("Erreur lors de la suppression du fichier");
        setFiles(files.filter(f => f.name !== name));
    } catch (error) {
        console.error("Erreur:", error);
    }
  };

  if (loading) return <div className="flex justify-center items-center"><Loader /></div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Liste des fichiers</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {files.map((file) => (
            <li key={file.id} className="flex justify-between items-center p-2 border rounded">
              <span>{file.name}</span>
              <Dialog>
                <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Trash2 className="text-red-500" />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Confirmer la suppression</DialogTitle>
                    <DialogDescription>
                        Êtes-vous sûr de vouloir supprimer le fichier {file.name} ?
                        Cette action est irréversible.
                    </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Annuler</Button>
                        </DialogClose>
                        <Button variant="destructive" onClick={() => handleDelete(file.name)}>Supprimer</Button>
                    </DialogFooter>
                </DialogContent>
              </Dialog>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
