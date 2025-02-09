
const formatTime = (minutes, seconds) => {
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export { formatTime };
