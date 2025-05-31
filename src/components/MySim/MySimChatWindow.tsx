import { useState, useRef, useEffect, useCallback } from 'react';

// Définir les types pour la position et les références de drag
interface Position {
    x: number;
    y: number;
}

interface DragRef {
    startX: number;
    startY: number;
}

export default function MySimChatWindow() {
    const [position, setPosition] = useState<Position>({ x: 100, y: 100 });
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [isMinimized, setIsMinimized] = useState<boolean>(false);
    const dragRef = useRef<DragRef | null>(null);

    // Gérer le début du drag (souris ou tactile)
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        setIsDragging(true);
        dragRef.current = {
            startX: clientX - position.x,
            startY: clientY - position.y,
        };
    };

    // Gérer le déplacement (souris ou tactile) avec useCallback
    const handleMouseMove = useCallback(
        (e: MouseEvent | TouchEvent) => {
            if (isDragging && dragRef.current) {
                const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
                const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

                const newX = clientX - dragRef.current.startX;
                const newY = clientY - dragRef.current.startY;

                // Limiter le déplacement pour éviter que la fenêtre sorte de l'écran
                const boundedX = Math.max(0, Math.min(newX, window.innerWidth - 300)); // 300 = largeur
                const boundedY = Math.max(0, Math.min(newY, window.innerHeight - (isMinimized ? 40 : 400))); // 400 = hauteur pleine, 40 = hauteur minimisée

                setPosition({ x: boundedX, y: boundedY });
            }
        },
        [isDragging, isMinimized] // Dépendances de handleMouseMove
    );

    // Arrêter le drag avec useCallback
    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        dragRef.current = null;
    }, []);

    // Ajouter les écouteurs d'événements pour la souris et le tactile
    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('touchmove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging, handleMouseMove, handleMouseUp]); // Inclure handleMouseMove et handleMouseUp dans les dépendances

    return (
        <div
            className={`absolute w-[300px] ${isMinimized ? 'h-[40px]' : 'h-[400px]'} bg-white border border-gray-300 rounded-lg shadow-lg z-50 cursor-move select-none`}
            style={{ top: position.y, left: position.x }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
        >
            <div className="bg-black text-white p-2 rounded-t-lg flex justify-between items-center">
                <h3 className="text-lg font-semibold">My Sim</h3>
                <button
                    className="text-white hover:bg-white rounded px-2"
                    onClick={() => setIsMinimized(!isMinimized)}
                >
                    {isMinimized ? '+' : '−'}
                </button>
            </div>
            {!isMinimized && (
                <div className="p-4 h-[calc(100%-40px)] overflow-y-auto">
                    <p>Contenu de la fenêtre de chat...</p>
                    {/* Ajoute ici la logique de ton chat */}
                </div>
            )}
        </div>
    );
}