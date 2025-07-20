import { ANSI } from "~/utils/ansi";
import system, { _int, _short, _long } from "~/system";

type short = number;
type int = number;
type long = number;
type double = number;
type bool = boolean;

/**
 * Консольные утилиты ForeverSDK
 */
class Self$Console {
	/**
	 * Получает текущее время в формате строки
	 * @private
	 * @returns {string} Текущее время в формате локали
	 */
	private static getTime(): string {
		const tm: Date = new Date();
		const time: string = tm.toLocaleTimeString("ru-RU", {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false
		});
		return String(time);
	}

	/**
	 * Выводит сообщение об успехе (зелёного цвета)
	 * @param {string} thread Название потока/модуля
	 * @param {string | number} message Сообщение для вывода
	 * @returns {void}
	 */
	public static Success(thread: string, message: string | number): void {
		console.log(`${ANSI.BRIGHT_GREEN}[${this.getTime()}] [${thread}/SUCCESS]: ${message}${ANSI.RESET}`);
		return;
	}

	/**
	 * Выводит отладочное сообщение
	 * @param {string} thread Название потока/модуля
	 * @param {string | number} message Сообщение для вывода
	 * @returns {void}
	 */
	public static Debug(thread: string, message: string | number): void {
		console.log(`[${this.getTime()}] [${thread}/DEBUG]: ${message}`);
		return;
	}

	/**
	 * Выводит информационное сообщение
	 * @param {string} thread Название потока/модуля
	 * @param {string | number} message Сообщение для вывода
	 * @returns {void}
	 */
	public static Log(thread: string, message: string | number): void {
		console.log(`[${this.getTime()}] [${thread}/INFO]: ${message}`);
		return;
	}

	/**
	 * Выводит предупреждение (жёлтого цвета)
	 * @param {string} thread Название потока/модуля
	 * @param {string | number} message Сообщение для вывода
	 * @returns {void}
	 */
	public static Warn(thread: string, message: string | number): void {
		console.log(`${ANSI.BRIGHT_YELLOW}[${this.getTime()}] [${thread}/WARN]: ${message}${ANSI.RESET}`);
		return;
	}

	/**
	 * Выводит сообщение об ошибке (красного цвета)
	 * @param {string} thread Название потока/модуля
	 * @param {string | number} message Сообщение для вывода
	 * @returns {void}
	 */
	public static Error(thread: string, message: string | number): void {
		console.log(`${ANSI.BRIGHT_RED}[${this.getTime()}] [${thread}/ERROR]: ${message}${ANSI.RESET}`);
		return;
	}

	/**
	 * Выводит сообщение о фатальной ошибке (жирный красный цвет)
	 * @param {string} thread Название потока/модуля
	 * @param {string | number} message Сообщение для вывода
	 * @returns {void}
	 */
	public static FatalError(thread: string, message: string | number): void {
		console.log(`${ANSI.BOLD}${ANSI.BRIGHT_RED}[${this.getTime()}] [${thread}/FATAL ERROR]: ${message}${ANSI.RESET}`);
		return;
	}
}

/**
 * Утилиты для работы с конфигурацией
 */
class Self$config {
	/** @private */
	private static _configPath: string | null = null;

	/**
	 * Инициализирует путь к конфигурационному файлу
	 * @param {string} path Путь к конфигурационному файлу
	 * @returns {void}
	 */
	public static init(path: string): void {
		if (this._configPath) {
			ForeverSdk.Console.Warn("ForeverSDK", "Config path is already set. Overwriting...");
		}
		this._configPath = path;
	}

	/**
	 * Получает путь к конфигурационному файлу
	 * @throws {Error} Если путь не был установлен
	 * @returns {string} Путь к конфигурационному файлу
	 */
	public static getPath(): string {
		if (!this._configPath) {
			ForeverSdk.Console.FatalError("ForeverSDK", "Config path not set. Call ForeverSdk.config.init() first.");
			throw new Error("Config path not set. Call ForeverSdk.config.init() first.");
		}
		return this._configPath;
	}
}

/**
 * Утилиты для работы с пакетом SDK
 */
class Self$package {
	/**
	 * Получает версию SDK
	 * @returns {string} Версия SDK
	 */
	public static version(): string {
		return system.version;
	}

	/**
	 * Получает код версии SDK
	 * @returns {int} Код версии SDK
	 */
	public static versionCode(): int {
		return _int(system.versionCode);
	}

	/**
	 * Выводит информацию о версии SDK в консоль
	 * @returns {void}
	 */
	public static printVersion(): void {
		console.log(
			`---------------------------\n| ${ANSI.BOLD}ForeverSDK v${system.version}\n${ANSI.RESET}| Developed by FimastGD\n---------------------------`
		);
	}
}

/**
 * ForeverSDK - основной SDK для работы с системой
 */
export default class ForeverSdk {
	public static Console = Self$Console;
	public static config = Self$config;
	public static package = Self$package;
}
