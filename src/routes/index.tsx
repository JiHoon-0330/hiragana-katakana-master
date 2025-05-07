import { createSignal, For } from "solid-js";

export default function Home() {
	const hiraganaLines = [
		[
			{ hiragana: "あ", ko: "아" },
			{ hiragana: "い", ko: "이" },
			{ hiragana: "う", ko: "우" },
			{ hiragana: "え", ko: "에" },
			{ hiragana: "お", ko: "오" },
		],
		[
			{ hiragana: "か", ko: "카" },
			{ hiragana: "き", ko: "키" },
			{ hiragana: "く", ko: "쿠" },
			{ hiragana: "け", ko: "케" },
			{ hiragana: "こ", ko: "코" },
		],
		[
			{ hiragana: "さ", ko: "사" },
			{ hiragana: "し", ko: "시" },
			{ hiragana: "す", ko: "스" },
			{ hiragana: "せ", ko: "세" },
			{ hiragana: "そ", ko: "소" },
		],
		[
			{ hiragana: "た", ko: "타" },
			{ hiragana: "ち", ko: "치" },
			{ hiragana: "つ", ko: "츠" },
			{ hiragana: "て", ko: "테" },
			{ hiragana: "と", ko: "토" },
		],
		[
			{ hiragana: "な", ko: "나" },
			{ hiragana: "に", ko: "니" },
			{ hiragana: "ぬ", ko: "누" },
			{ hiragana: "ね", ko: "네" },
			{ hiragana: "の", ko: "노" },
		],
		[
			{ hiragana: "は", ko: "하" },
			{ hiragana: "ひ", ko: "히" },
			{ hiragana: "ふ", ko: "후" },
			{ hiragana: "へ", ko: "헤" },
			{ hiragana: "ほ", ko: "호" },
		],
		[
			{ hiragana: "ま", ko: "마" },
			{ hiragana: "み", ko: "미" },
			{ hiragana: "む", ko: "무" },
			{ hiragana: "め", ko: "메" },
			{ hiragana: "も", ko: "모" },
		],
		[
			{ hiragana: "や", ko: "야" },
			{ hiragana: "ゆ", ko: "유" },
			{ hiragana: "よ", ko: "요" },
		],
		[
			{ hiragana: "ら", ko: "라" },
			{ hiragana: "り", ko: "리" },
			{ hiragana: "る", ko: "루" },
			{ hiragana: "れ", ko: "레" },
			{ hiragana: "ろ", ko: "로" },
		],
		[
			{ hiragana: "わ", ko: "와" },
			{ hiragana: "を", ko: "오" },
			{ hiragana: "ん", ko: "응" },
		],
	];

	const [currentLineIndex, setCurrentLineIndex] = createSignal(0);
	const [pronunciation, setPronunciation] = createSignal("");
	const currentLine = () => hiraganaLines[currentLineIndex()];
	const hiraganaLinesCount = hiraganaLines.length;

	const handlePrev = () => {
		setCurrentLineIndex((prev) =>
			prev > 0 ? prev - 1 : hiraganaLinesCount - 1,
		);
		setPronunciation("");
	};

	const handleNext = () => {
		setCurrentLineIndex((prev) =>
			prev < hiraganaLinesCount - 1 ? prev + 1 : 0,
		);
		setPronunciation("");
	};

	return (
		<main>
			<div class="hiragana-line">
				<For each={currentLine()}>
					{(item) => (
						<span class="char" onclick={() => setPronunciation(item.ko)}>
							{item.hiragana}
						</span>
					)}
				</For>
			</div>

			<div class="pronunciation">{pronunciation()}</div>
			<div class="buttons">
				<button type="button" class="button" onclick={handlePrev}>
					이전
				</button>
				<button type="button" class="button" onclick={handleNext}>
					다음
				</button>
			</div>
		</main>
	);
}
