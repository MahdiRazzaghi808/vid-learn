import {
  Search,
  Coffee,
  MessageSquareCode,
  Pin,
  ClipboardList,
  Plus,
} from "lucide-react";
import { Button } from "@repo/main/components/ui/button";
import { Input, InputWrapper } from "@repo/main/components/ui/input";
import { useLayout } from "./context";

export function HeaderToolbar() {
  const { isMobile } = useLayout();

  const handleInputChange = () => { };

  return (
    <nav className="flex items-center gap-2.5">
      {/* دکمه‌های آیکون */}
      <Button mode="icon" variant="outline"><Coffee /></Button>
      <Button mode="icon" variant="outline"><MessageSquareCode /></Button>
      <Button mode="icon" variant="outline"><Pin /></Button>

      {/* جستجو */}
      {!isMobile && (
        <InputWrapper className="w-full lg:w-40">
          <Search />
          <Input
            type="search"
            placeholder="جستجو..."
            onChange={handleInputChange}
          />
        </InputWrapper>
      )}

      {/* دکمه‌های موبایل و دسکتاپ */}
      {isMobile ? (
        <>
          <Button variant="outline" mode="icon"><ClipboardList /></Button>
          <Button variant="mono" mode="icon"><Plus /></Button>
        </>
      ) : (
        <>
          <Button variant="outline">
            <ClipboardList />
            <span>گزارش‌ها</span>
          </Button>
          <Button variant="mono">
            <Plus />
            <span>اضافه کردن</span>
          </Button>
        </>
      )}
    </nav>
  );
}
