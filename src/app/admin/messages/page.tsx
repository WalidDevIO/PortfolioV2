import { getMessagesAdmin } from "@/actions/livredor";
import { AcceptButton, DeleteButton } from "./Buttons";

export default async function LivreDor() {

    const messages = await getMessagesAdmin();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-dark dark:text-white">Livre d&apos;or</h1>
            {messages.length > 0 ? (
                <div className="mt-4">
                    <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">Messages</h2>
                    <div className="overflow-x-auto rounded-lg shadow">
                        <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
                            <thead className="bg-gray-200 dark:bg-gray-800">
                                <tr>
                                    <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700">Nom</th>
                                    <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700">Message</th>
                                    <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700">Date</th>
                                    <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700">Publié</th>
                                    <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messages.map((message) => (
                                    <tr key={message.id} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                                        <td className="px-4 py-3 text-dark dark:text-white font-medium">{message.name || "Anonyme"}</td>
                                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{message.content}</td>
                                        <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                                            {new Date(message.created_at).toLocaleString()}
                                        </td>
                                        <td className="px-4 py-3">{message.published ? "Oui" : "Non"}</td>
                                        <td className="px-4 py-3 flex align-center justify-center">
                                            {!message.published&&<AcceptButton message={message} />}
                                            <DeleteButton message={message} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            
            ) : (
                <div className="mt-4">
                    <p className="text-lg text-gray-500 dark:text-gray-400">Aucun message trouvé.</p>
                </div>
            )}
        </div>
    );
}