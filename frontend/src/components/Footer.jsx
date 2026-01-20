const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600">
        
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            MiniAirbnb
          </h3>
          <p className="text-sm">
            Find unique stays and experiences around the world.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Homes</li>
            <li>Apartments</li>
            <li>Experiences</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">
            Legal
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} MiniAirbnb. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
