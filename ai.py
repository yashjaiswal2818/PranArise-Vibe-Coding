import os
import google.generativeai as genai

class MentalHealthChatbot:
    def __init__(self, api_key: str, model_name: str):
        # Configure the Gemini API with the provided key
        genai.configure(api_key=api_key)
        # Use the provided model name
        self.model = genai.GenerativeModel(model_name)
        self.intro_message()

    def intro_message(self):
        print("\n🧠 Welcome to your Gemini-powered Mental Health Companion!")
        print("I'm here to listen and offer support. Type 'exit' to end the session.\n")
    
    def generate_response(self, user_input: str) -> str:
        """Sends the user's message to the Gemini API and returns the response."""
        try:
            # Craft a prompt that encourages an empathetic and helpful tone
            prompt = (
                f"You are a kind, empathetic, and compassionate mental health companion. "
                f"Respond to the following message as a supportive friend, offering encouragement and a listening ear. "
                f"Keep your responses concise and positive.\n\nUser: {user_input}\nCompanion:"
            )
            
            # Generate a response from the Gemini model
            response = self.model.generate_content(prompt)
            
            # Return the text content of the response
            return response.text
        
        except Exception as e:
            # Handle API errors and provide a fallback message
            return f"I'm sorry, I couldn't generate a response at the moment. Error: {e}"

    def chat_loop(self):
        while True:
            user_input = input("💬 You: ")
            if user_input.strip().lower() in {"exit", "quit"}:
                print("👋 Take care! Remember, you're not alone. 🌈")
                break
            
            # Generate a response using the Gemini API
            response = self.generate_response(user_input)
            print(f"🤖 Companion: {response}")

if __name__ == "__main__":
    API_KEY = os.getenv("GEMINI_API_KEY") 
    
    if not API_KEY:
        print("❌ Error: GEMINI_API_KEY environment variable not set. Please set it and try again.")
        exit()

    # Use a working model name based on your previous check
    chatbot = MentalHealthChatbot(api_key=API_KEY, model_name='models/gemini-1.5-flash-latest')
    chatbot.chat_loop()