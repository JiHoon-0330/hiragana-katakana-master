// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

// biome-ignore lint: 프레임워크 기본 파일
mount(() => <StartClient />, document.getElementById("app")!);
