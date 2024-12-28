import React, { useRef, useEffect, useState } from 'react';

interface SquaresProps {
    direction?: 'right' | 'left' | 'down' | 'up' | 'diagonal';
    speed?: number;
    borderColor?: string;
    hoverFillColor?: string;
    effectColor: string
}

const AnimatedSquar: React.FC<SquaresProps> = ({
    direction = 'right',
    speed = 1,
    borderColor = '#999',
    hoverFillColor = '#222',
    effectColor,
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const requestRef = useRef<number | null>(null);
    const squareSize = 50;
    const numSquaresX = useRef<number>(0);
    const numSquaresY = useRef<number>(0);
    const gridOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const [hoveredSquare, setHoveredSquare] = useState<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
            numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
        };

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let x = 0; x < numSquaresX.current; x++) {
                for (let y = 0; y < numSquaresY.current; y++) {
                    const squareX = x * squareSize + (gridOffset.current.x % squareSize);
                    const squareY = y * squareSize + (gridOffset.current.y % squareSize);

                    // Fill square if hovered
                    if (hoveredSquare && hoveredSquare.x === x && hoveredSquare.y === y) {
                        ctx.fillStyle = hoverFillColor;
                        ctx.fillRect(squareX, squareY, squareSize, squareSize);
                    }

                    // Set the border color
                    ctx.strokeStyle = borderColor;
                    ctx.strokeRect(squareX, squareY, squareSize, squareSize);
                }
            }

            // Draw radial gradient overlay
            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2
            );

            gradient.addColorStop(0, 'rgba(0, 0, 0, 0)'); // Transparent center
            gradient.addColorStop(1, effectColor);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const updateAnimation = () => {
            switch (direction) {
                case 'right':
                    gridOffset.current.x -= speed;
                    break;
                case 'left':
                    gridOffset.current.x += speed;
                    break;
                case 'down':
                    gridOffset.current.y += speed;
                    break;
                case 'up':
                    gridOffset.current.y -= speed;
                    break;
                case 'diagonal':
                    gridOffset.current.x -= speed;
                    gridOffset.current.y -= speed;
                    break;
                default:
                    break;
            }

            if (Math.abs(gridOffset.current.x) > squareSize) gridOffset.current.x = 0;
            if (Math.abs(gridOffset.current.y) > squareSize) gridOffset.current.y = 0;

            drawGrid();
            requestRef.current = requestAnimationFrame(updateAnimation);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const hoveredSquareX = Math.floor(
                (mouseX - (gridOffset.current.x % squareSize)) / squareSize
            );
            const hoveredSquareY = Math.floor(
                (mouseY - (gridOffset.current.y % squareSize)) / squareSize
            );

            setHoveredSquare({ x: hoveredSquareX, y: hoveredSquareY });
        };

        const handleMouseLeave = () => {
            setHoveredSquare(null);
        };

        window.addEventListener('resize', resizeCanvas);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        resizeCanvas();
        requestRef.current = requestAnimationFrame(updateAnimation);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(requestRef.current!);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [direction, speed, borderColor, hoverFillColor, hoveredSquare]);

    return <canvas ref={canvasRef} className="w-full h-full border-none block"></canvas>;
};

export default AnimatedSquar;
