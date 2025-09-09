import { useEffect, useState } from "react";
import {LoaderIcon} from "lucide-react";

type Props = {
    onReady?: () => void;
}

function BackendLoader( { onReady }: Props ) {
    const [isBackendUp, setIsBackendUp] = useState(false);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        const checkBackend = async () => {
            try {
                // Replace with your backend health or root endpoint
                const res = await fetch("https://inventory-py-backend.onrender.com", {
                    method: "GET",
                });

                if (res.ok) {
                    setIsBackendUp(true);
                    setChecking(false);
                    clearInterval(interval);
                    if (onReady) {
                        onReady();
                    }
                } else {
                    setIsBackendUp(false);
                }
            } catch (err) {
                setIsBackendUp(false);
            }
        };

        // First check immediately
        checkBackend().catch(console.error);

        // Then poll every 5 seconds until backend responds
        interval = setInterval(checkBackend, 5000);

        return () => clearInterval(interval);
    }, []);

    if (checking) {
        return (
            <div className="inline-flex gap-1 items-center">
                <LoaderIcon className={"animate-spin text-red-500"} />
                <p className="ml-4 text-lg text-red-500 font-bold">Starting demo backend - Just a minute </p>
            </div>
        );
    }

    return (
        <div>
            {isBackendUp ? (
                <p className="text-green-600">✅ Backend is ready!</p>
            ) : (
                <p className="text-red-600">❌ Backend unavailable.</p>
            )}
        </div>
    );
}

export default BackendLoader;
