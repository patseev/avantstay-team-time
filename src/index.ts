import { Clipboard, environment, LaunchType, Toast, updateCommandMetadata } from "@raycast/api";

const command = async () => {
  const now = new Date();

  const moscow = now.toLocaleString(undefined, { timeZone: "Europe/Moscow", timeStyle: "short" });
  const spain = now.toLocaleString(undefined, { timeZone: "Europe/Madrid", timeStyle: "short" });
  const uzbekistan = now.toLocaleString(undefined, { timeZone: "Asia/Tashkent", timeStyle: "short" });
  const LA = now.toLocaleString(undefined, { timeZone: "America/Los_Angeles", timeStyle: "short" });
  const NY = now.toLocaleString(undefined, { timeZone: "America/New_York", timeStyle: "short" });
  const brazil = now.toLocaleString(undefined, { timeZone: "America/Sao_Paulo", timeStyle: "short" });

  const subtitle = `🇪🇸 ${spain} 🇧🇷${brazil} 🇺🇸 ${LA} ${NY} 🇷🇺 ${moscow} 🇺🇿 ${uzbekistan}`;
  await updateCommandMetadata({ subtitle });

  if (environment.launchType === LaunchType.UserInitiated) {
    const toast = new Toast({
      style: Toast.Style.Success,
      title: "Refreshed!",
      message: subtitle,
    });
    toast.primaryAction = {
      title: "Copy to Clipboard",
      shortcut: { modifiers: ["cmd", "shift"], key: "c" },
      onAction: () => Clipboard.copy(subtitle),
    };
    await toast.show();
  }
};

export default command;
