"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";

const GRID_SIZE = 16;

const ContactAnimation = () => {
  const [snake, setSnake] = useState([]);
  const [running, setRunning] = useState(false);
  const [lines, setLines] = useState([]);
  const [containerSize, setContainerSize] = useState(0);
  const gridRef = useRef(null);

  const startSnake = useCallback(() => {
    const startCol = Math.floor(Math.random() * GRID_SIZE);
    const initialSnake = [
      { row: 1, col: startCol },
      { row: 2, col: startCol },
      { row: 3, col: startCol },
    ];
    setSnake(initialSnake);
    setRunning(true);
  }, []);

  const endSnake = useCallback(() => {
    setRunning(false);
    setSnake([]);
    setLines([]);
    setTimeout(() => {
      startSnake();
    }, 2000);
  }, [startSnake]);

  useEffect(() => {
    startSnake();
  }, [startSnake]);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        if (prevSnake.length === 0) return prevSnake;

        const head = prevSnake[prevSnake.length - 1];
        const direction = Math.floor(Math.random() * 3);
        const newRow = head.row + 1;
        let newCol = head.col;

        if (direction === 1 && head.col > 0) {
          newCol = head.col - 1;
        } else if (direction === 2 && head.col < GRID_SIZE - 2) {
          newCol = head.col + 1;
        }

        if (newRow >= GRID_SIZE - 1) {
          endSnake();
          return [];
        }

        const newSnake = [...prevSnake, { row: newRow, col: newCol }];
        while (newSnake.length > 3) {
          newSnake.shift();
        }
        return newSnake;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [running, endSnake]);

  useEffect(() => {
    const handleResize = () => {
      if (gridRef.current) {
        const width = gridRef.current.clientWidth;
        setContainerSize(width);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cellSize = useMemo(() => containerSize / GRID_SIZE || 0, [containerSize]);
  const circleRadius = useMemo(() => cellSize * 0.45, [cellSize]);

  const getCircleCenter = useCallback(
    (pos) => {
      return {
        x: (pos.col + 0.5) * cellSize,
        y: (pos.row + 0.5) * cellSize,
      };
    },
    [cellSize]
  );

  const currentLineSegments = useMemo(() => {
    return snake.slice(1).map((pos, i) => {
      const p1 = snake[i];
      const p2 = pos;
      const id = `${p1.row},${p1.col}-${p2.row},${p2.col}`;
      return { id, p1, p2 };
    });
  }, [snake]);

  useEffect(() => {
    setLines((prevLines) => {
      const neededIDs = currentLineSegments.map((seg) => seg.id);
      const nextLines = [];

      for (const line of prevLines) {
        if (neededIDs.includes(line.id)) {
          nextLines.push({
            ...line,
            visible: true,
            opacity: 1,
            isNew: false,
          });
        } else {
          nextLines.push({
            ...line,
            visible: false,
            opacity: 0,
            isNew: false,
          });
        }
      }

      for (const seg of currentLineSegments) {
        if (!prevLines.some((l) => l.id === seg.id)) {
          nextLines.push({
            id: seg.id,
            p1: seg.p1,
            p2: seg.p2,
            visible: false,
            opacity: 0,
            isNew: true,
          });
        }
      }

      const linesChanged =
        nextLines.length !== prevLines.length ||
        nextLines.some((nl, i) => {
          const pl = prevLines[i];
          return (
            !pl ||
            pl.id !== nl.id ||
            pl.visible !== nl.visible ||
            pl.opacity !== nl.opacity ||
            pl.isNew !== nl.isNew
          );
        });

      return linesChanged ? nextLines : prevLines;
    });
  }, [currentLineSegments]);

  useEffect(() => {
    const newLines = lines.filter((l) => l.isNew);
    if (newLines.length > 0) {
      const t = setTimeout(() => {
        setLines((prev) =>
          prev.map((line) =>
            line.isNew
              ? { ...line, visible: true, opacity: 1, isNew: false }
              : line
          )
        );
      }, 50);
      return () => clearTimeout(t);
    }
  }, [lines]);

  useEffect(() => {
    const invisibleLines = lines.filter(
      (l) => !l.visible && !l.isNew && l.opacity === 0
    );
    if (invisibleLines.length > 0) {
      const t = setTimeout(() => {
        setLines((prev) =>
          prev.filter((line) => line.visible || line.opacity > 0)
        );
      }, 600);
      return () => clearTimeout(t);
    }
  }, [lines]);

  const gridRows = useMemo(() => Array.from({ length: GRID_SIZE }), []);
  const gridCols = useMemo(() => Array.from({ length: GRID_SIZE }), []);

  return (
    <div ref={gridRef} className="relative aspect-square ms-40 w-[90%]">
      {/* Lines */}
      {lines.map((line) => {
        const p1 = getCircleCenter(line.p1);
        const p2 = getCircleCenter(line.p2);

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        return (
          <div
            key={line.id}
            className="absolute bg-white"
            style={{
              width: `${length}px`,
              height: "5px",
              top: `${p1.y}px`,
              left: `${p1.x}px`,
              transformOrigin: "0% 50%",
              transform: `rotate(${angle}deg) scaleX(${line.visible ? 1 : 0})`,
              opacity: line.opacity,
              transition: `
                opacity 300ms ease-out,
                transform 500ms ease-in-out
              `,
            }}
          />
        );
      })}

      {/* Circles */}
      {gridRows.map((_, row) =>
        gridCols.map((_, col) => {
          const isInSnake = snake.some(
            (segment) => segment.row === row && segment.col === col
          );

          const adjacentPositions = [
            { row: row - 1, col: col },
            { row: row + 1, col: col },
            { row: row, col: col - 1 },
            { row: row, col: col + 1 },
          ];

          const isAdjacentToSnake = adjacentPositions.some((adj) =>
            snake.some(
              (segment) => segment.row === adj.row && segment.col === adj.col
            )
          );

          const bgColor = isInSnake
            ? "bg-white"
            : isAdjacentToSnake
            ? "bg-neutral-900"
            : "bg-black";

          const circleCenterX = (col + 0.5) * cellSize;
          const circleCenterY = (row + 0.5) * cellSize;

          return (
            <div
              key={`${row}-${col}`}
              className={`absolute rounded-full transition-colors duration-500 ease-in-out ${bgColor}`}
              style={{
                width: `${circleRadius * 2}px`,
                height: `${circleRadius * 2}px`,
                left: `${circleCenterX - circleRadius}px`,
                top: `${circleCenterY - circleRadius}px`,
              }}
            ></div>
          );
        })
      )}
    </div>
  );
};

export default ContactAnimation;
