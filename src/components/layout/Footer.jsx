export default function Footer() {
  return (
    <footer className="bg-[#EEC31B] text-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h2 className="text-black text-2xl font-bold">HomeRun</h2>
            <p className="mt-2 text-sm text-gray-700">
              Building materials in 60 mins
            </p>
          </div>

          <div>
            <h3 className="text-black text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/" className="hover:text-black">Home</a></li>
              <li><a href="/" className="hover:text-black">About</a></li>
              <li><a href="/" className="hover:text-black">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black text-lg font-semibold">Support</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/" className="hover:text-black">FAQ</a></li>
              <li><a href="/" className="hover:text-black">Shipping</a></li>
              <li><a href="/" className="hover:text-black">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black text-lg font-semibold">Contact Information</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Email: hello@home-run.co</li>
              <li>Address: 5, Sunningdale, No.22/8, Dsouza Layout, Vittal Mallya Road, Bengaluru – 560001</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-700">
          © {new Date().getFullYear()} HomeRun. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
