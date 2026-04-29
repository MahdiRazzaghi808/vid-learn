import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-accent-foreground mb-6">ویدلرن</h3>
          <p className="text-sm leading-relaxed text-accent-foreground/60">
            ویدلرن پلتفرم جامع آموزش ویدیویی است که با هدف ارتقای سطح دانش و مهارت‌های تخصصی ایجاد شده است.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-accent-foreground mb-6">دسترسی سریع</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-primary transition-colors">درباره ما</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">تماس با ما</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">قوانین و مقررات</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">سوالات متداول</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-accent-foreground mb-6">دسته‌بندی‌ها</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-primary transition-colors">برنامه‌نویسی وب</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">طراحی UI/UX</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">هوش مصنوعی</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">بازاریابی دیجیتال</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-accent-foreground mb-6">ارتباط با ما</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span>info@vidlearner.ir</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span className="leading-relaxed">تهران، خیابان ولیعصر، تقاطع میرداماد، پلاک ۱۲۳</span>
            </li>
          </ul>
        </div>
      </div>

      <div className=" mt-12 pt-8 border-t border-gray-400 text-center text-sm text-gray-500">
        <p>تمامی حقوق این وب‌سایت متعلق به ویدلرن می‌باشد. © ۱۴۰۵</p>
      </div>
    </footer>
  );
}
