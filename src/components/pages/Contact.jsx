import React from 'react'

const Contact = () => {
  return (
    <div>
        <div class="container mx-auto my-10 p-5">
    <div class="bg-white shadow-lg rounded-lg p-8">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

      <form action="#" method="POST" class="space-y-6">
        <div class="flex flex-col md:flex-row md:space-x-6">
          <div class="flex-1">
            <label for="name" class="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input type="text" id="name" name="name" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div class="flex-1">
            <label for="email" class="block text-gray-700 font-semibold mb-2">Email Address</label>
            <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
        </div>

        <div>
          <label for="subject" class="block text-gray-700 font-semibold mb-2">Subject</label>
          <input type="text" id="subject" name="subject" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <div>
          <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        <div class="text-center">
          <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
        </div>
      </form>
    </div>
  </div>

    </div>
  )
}

export default Contact