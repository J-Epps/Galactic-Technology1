const allProducts = [
  {
    name: "Andromeda Galaxy Phone",
    description:
      '<ul class="prodDescriptionList"><div>PHONE FEATURES:</div><br /><li>6.1-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1511226964783-53427a67e5fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
    price: "150.00",
    category: "Phones",
    subcategory: "Android Phones"
  },
  {
    name: "Butterfly Galaxy Phone",
    description:
      '<ul class="prodDescriptionList"><div>PHONE FEATURES:</div><br /><li>6.1-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1511138743687-5c14e8cfcf47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    price: "175.00",
    category: "Phones",
    subcategory: "Android Phones"
  },
  {
    name: "Cartwheel Galaxy Phone",
    description:
      '<ul class="prodDescriptionList"><div>PHONE FEATURES:</div><br /><li>6.1-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1545067064-c0dd8956d13a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=937&q=80",
    price: "200.00",
    category: "Phones",
    subcategory: "Android Phones"
  },
  {
    name: "Comet Galaxy Phone",
    description:
      '<ul class="prodDescriptionList"><div>PHONE FEATURES:</div><br /><li>6.1-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1563884072595-24a1d9dd5647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80",
    price: "225.00",
    category: "Phones",
    subcategory: "Android Phones"
  },
  {
    name: "Fireworks Galaxy Phone",
    description:
      '<ul class="prodDescriptionList"><div>PHONE FEATURES:</div><br /><li>6.1-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
    price: "250.00",
    category: "Phones",
    subcategory: "Android Phones"
  },
  {
    name: "Little Sombrero Galaxy Phone",
    description:
      '<ul class="prodDescriptionList"><div>PHONE FEATURES:</div><br /><li>6.1-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1587450843502-2669150cbbb4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1065&q=80",
    price: "275.00",
    category: "Phones",
    subcategory: "Android Phones"
  },
  {
    name: "Milky Way Galaxy Phone",
    description:
      '<ul class="prodDescriptionList"><div>PHONE FEATURES:</div><br /><li>6.1-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1531986362435-16b427eb9c26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    price: "300.00",
    category: "Phones",
    subcategory: "Android Phones"
  },
  {
    name: "Pinwheel Galaxy Phone",
    description:
      '<ul class="prodDescriptionList"><div>PHONE FEATURES:</div><br /><li>6.1-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1618680551746-83925d89838b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "325.00",
    category: "Phones",
    subcategory: "Android Phones"
  },
  {
    name: "Sombrero Galaxy Phone",
    description:
      '<ul class="prodDescriptionList"><div>PHONE FEATURES:</div><br /><li>6.1-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1605440458537-8c98466d0dd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "350.00",
    category: "Phones",
    subcategory: "Android Phones"
  },
  {
    name: "Sunflower Galaxy Phone",
    description:
      '<ul class="prodDescriptionList"><div>PHONE FEATURES:</div><br /><li>6.1-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80",
    price: "375.00",
    category: "Phones",
    subcategory: "Android Phones"
  },
  {
    name: "Tadpole Galaxy Phone",
    description:
      '<ul class="prodDescriptionList"><div>PHONE FEATURES:</div><br /><li>6.1-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1531161339673-a943dd10e29f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "400.00",
    category: "Phones",
    subcategory: "Android Phones"
  },
  {
    name: "Whirlpool Galaxy Phone",
    description:
      '<ul class="prodDescriptionList"><div>PHONE FEATURES:</div><br /><li>6.1-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1529611239-29501290ad7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "425.00",
    category: "Phones",
    subcategory: "Android Phones"
  },
  {
    name: "Andromeda Galaxy Watch",
    description:
      '<ul class="prodDescriptionList"><div>WATCH FEATURES:</div><br /><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1560863185-a4f6199b5768?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    price: "150.00",
    category: "Watches",
    subcategory: "Smart Watch"
  },
  {
    name: "Butterfly Galaxy Watch",
    description:
      '<ul class="prodDescriptionList"><div>WATCH FEATURES:</div><br /><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1523395451704-22c6fb0522cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    price: "175.00",
    category: "Watches",
    subcategory: "Smart Watch"
  },
  {
    name: "Cartwheel Galaxy Watch",
    description:
      '<ul class="prodDescriptionList"><div>WATCH FEATURES:</div><br /><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1523755621014-30c8a5029566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80",
    price: "200.00",
    category: "Watches",
    subcategory: "Smart Watch"
  },
  {
    name: "Comet Galaxy Watch",
    description:
      '<ul class="prodDescriptionList"><div>WATCH FEATURES:</div><br /><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1597038519284-aa729dd6d720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    price: "225.00",
    category: "Watches",
    subcategory: "Smart Watch"
  },
  {
    name: "Fireworks Galaxy Watch",
    description:
      '<ul class="prodDescriptionList"><div>WATCH FEATURES:</div><br /><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1575125069494-6a0c5819d340?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "250.00",
    category: "Watches",
    subcategory: "Smart Watch"
  },
  {
    name: "Little Sombrero Galaxy Watch",
    description:
      '<ul class="prodDescriptionList"><div>WATCH FEATURES:</div><br /><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1617043593449-c881f876a4b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "275.00",
    category: "Watches",
    subcategory: "Smart Watch"
  },
  {
    name: "Milky Way Galaxy Watch",
    description:
      '<ul class="prodDescriptionList"><div>WATCH FEATURES:</div><br /><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1594619272803-932ee1b5a0d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "300.00",
    category: "Watches",
    subcategory: "Smart Watch"
  },
  {
    name: "Pinwheel Galaxy Watch",
    description:
      '<ul class="prodDescriptionList"><div>WATCH FEATURES:</div><br /><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1543164904-8ff92670a192?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "325.00",
    category: "Watches",
    subcategory: "Smart Watch"
  },
  {
    name: "Sombrero Galaxy Watch",
    description:
      '<ul class="prodDescriptionList"><div>WATCH FEATURES:</div><br /><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1585565804139-66b506b475d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    price: "350.00",
    category: "Watches",
    subcategory: "Smart Watch"
  },
  {
    name: "Sunflower Galaxy Watch",
    description:
      '<ul class="prodDescriptionList"><div>WATCH FEATURES:</div><br /><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    price: "375.00",
    category: "Watches",
    subcategory: "Smart Watch"
  },
  {
    name: "Tadpole Galaxy Watch",
    description:
      '<ul class="prodDescriptionList"><div>WATCH FEATURES:</div><br /><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1548192221-8f8887bb5a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80",
    price: "400.00",
    category: "Watches",
    subcategory: "Smart Watch"
  },
  {
    name: "Whirlpool Galaxy Watch",
    description:
      '<ul class="prodDescriptionList"><div>WATCH FEATURES:</div><br /><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1555024502-f4472a2f0321?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "425.00",
    category: "Watches",
    subcategory: "Smart Watch"
  },
  {
    name: "Andromeda Galaxy Tablet",
    description:
      '<ul class="prodDescriptionList"><div>TABLET FEATURES:</div><br /><li>18.3-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1607452263110-39a87c399c50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "250.00",
    category: "Tablets",
    subcategory: "Android Tablets"
  },
  {
    name: "Butterfly Galaxy Tablet",
    description:
      '<ul class="prodDescriptionList"><div>TABLET FEATURES:</div><br /><li>18.3-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1612367990403-73ef3e67bc4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "275.00",
    category: "Tablets",
    subcategory: "Android Tablets"
  },
  {
    name: "Cartwheel Galaxy Tablet",
    description:
      '<ul class="prodDescriptionList"><div>TABLET FEATURES:</div><br /><li>18.3-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1526430752879-b9eb53fbd772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "300.00",
    category: "Tablets",
    subcategory: "Android Tablets"
  },
  {
    name: "Comet Galaxy Tablet",
    description:
      '<ul class="prodDescriptionList"><div>TABLET FEATURES:</div><br /><li>18.3-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1607452258545-943d7243463c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    price: "325.00",
    category: "Tablets",
    subcategory: "Android Tablets"
  },
  {
    name: "Fireworks Galaxy Tablet",
    description:
      '<ul class="prodDescriptionList"><div>TABLET FEATURES:</div><br /><li>18.3-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1522204553393-1f71c9d4296d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1012&q=80",
    price: "350.00",
    category: "Tablets",
    subcategory: "Android Tablets"
  },
  {
    name: "Little Sombrero Galaxy Tablet",
    description:
      '<ul class="prodDescriptionList"><div>TABLET FEATURES:</div><br /><li>18.3-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1612187209234-3b9a15d327e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=989&q=80",
    price: "375.00",
    category: "Tablets",
    subcategory: "Android Tablets"
  },
  {
    name: "Milky Way Galaxy Tablet",
    description:
      '<ul class="prodDescriptionList"><div>TABLET FEATURES:</div><br /><li>18.3-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1615529854808-9e2643449136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    price: "400.00",
    category: "Tablets",
    subcategory: "Android Tablets"
  },
  {
    name: "Pinwheel Galaxy Tablet",
    description:
      '<ul class="prodDescriptionList"><div>TABLET FEATURES:</div><br /><li>18.3-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1599009432364-3dc0d1932da2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    price: "425.00",
    category: "Tablets",
    subcategory: "Android Tablets"
  },
  {
    name: "Sombrero Galaxy Tablet",
    description:
      '<ul class="prodDescriptionList"><div>TABLET FEATURES:</div><br /><li>18.3-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1606127172103-c0cff0ae357a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    price: "450.00",
    category: "Tablets",
    subcategory: "Android Tablets"
  },
  {
    name: "Sunflower Galaxy Tablet",
    description:
      '<ul class="prodDescriptionList"><div>TABLET FEATURES:</div><br /><li>18.3-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1621009063622-4467e453c3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "475.00",
    category: "Tablets",
    subcategory: "Android Tablets"
  },
  {
    name: "Tadpole Galaxy Tablet",
    description:
      '<ul class="prodDescriptionList"><div>TABLET FEATURES:</div><br /><li>18.3-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1610664840481-10b7b43c9283?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "500.00",
    category: "Tablets",
    subcategory: "Android Tablets"
  },
  {
    name: "Whirlpool Galaxy Tablet",
    description:
      '<ul class="prodDescriptionList"><div>TABLET FEATURES:</div><br /><li>18.3-inch Super Retina XDR Display</li><li>Ceramic Shield</li><li>5G Connectivity</li><li>A14 Bionic Chip</li><li>Advanced Dual-Camera System</li><li>Night Mode</li><li>Deep Fusion</li><li>Smart HDR 3</li><li>4K Dolby Vision HDR Recording</li><li>IP68 Water Resistance</li><li>Supports MagSafe Accessories</li><li>iOS 14 or Android 14</li></ul><br />',
    image:
      "https://images.unsplash.com/photo-1604347794911-38f7f8cdfa7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1464&q=80",
    price: "525.00",
    category: "Tablets",
    subcategory: "Android Tablets"
  }
];

export default allProducts;
