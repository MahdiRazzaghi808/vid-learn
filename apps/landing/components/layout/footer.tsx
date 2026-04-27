import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-16 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white mb-6">ویدلرن</h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            ویدلرن پلتفرم جامع آموزش ویدیویی است که با هدف ارتقای سطح دانش و مهارت‌های تخصصی ایجاد شده است.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-6">دسترسی سریع</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">درباره ما</a></li>
            <li><a href="#" className="hover:text-white transition-colors">تماس با ما</a></li>
            <li><a href="#" className="hover:text-white transition-colors">قوانین و مقررات</a></li>
            <li><a href="#" className="hover:text-white transition-colors">سوالات متداول</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-6">دسته‌بندی‌ها</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">برنامه‌نویسی وب</a></li>
            <li><a href="#" className="hover:text-white transition-colors">طراحی UI/UX</a></li>
            <li><a href="#" className="hover:text-white transition-colors">هوش مصنوعی</a></li>
            <li><a href="#" className="hover:text-white transition-colors">بازاریابی دیجیتال</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-6">ارتباط با ما</h4>
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
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
        <p>تمامی حقوق این وب‌سایت متعلق به ویدلرن می‌باشد. © ۱۴۰۵</p>
      </div>
    </footer>
  );
}
