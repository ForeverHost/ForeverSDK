export const ANSI: Record<string, string> = {
	BLACK: "\x1b[30m",
	RED: "\x1b[31m",
	GREEN: "\x1b[32m",
	YELLOW: "\x1b[33m",
	BLUE: "\x1b[34m",
	MAGENTA: "\x1b[35m",
	CYAN: "\x1b[36m",
	WHITE: "\x1b[37m",
	// Яркие версии (high intensity)
	BRIGHT_BLACK: "\x1b[90m",
	BRIGHT_RED: "\x1b[91m",
	BRIGHT_GREEN: "\x1b[92m",
	BRIGHT_YELLOW: "\x1b[93m",
	BRIGHT_BLUE: "\x1b[94m",
	BRIGHT_MAGENTA: "\x1b[95m",
	BRIGHT_CYAN: "\x1b[96m",
	BRIGHT_WHITE: "\x1b[97m",
	// Стили
	BOLD: "\x1b[1m",
	UNDERLINE: "\x1b[4m",
	REVERSE: "\x1b[7m",
	RESET: "\x1b[0m"
};
