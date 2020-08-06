class ApplicationController < ActionController::API
    skip_before_action :verify_authenticity_token
  helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!
def login!
    session[:user_id] = @user.id
  end
def logged_in?
    !!session[:user_id]
  end
def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
def authorized_user?
     @user == current_user
   end
def logout!
     session.clear
   end
    
    def authenticate_token
        puts "AUTHENTICATE JWT"
        render json: { status: 401, message: 'Unauthorized' } unless decode_token(bearer_token)
    end

    def bearer_token
        puts "BEARER TOKEN"
        puts header = request.env["HTTP_AUTHORIZATION"]

        pattern = /^Bearer /
        puts "TOKEN WITHOUT BEARER"
        puts header.gsub(pattern, '') if header && header.match(pattern)
    end

    def decode_token(token_input)
        puts "DECODE TOKEN, token input: #{token_input}"
        puts token = JWT.decode(token_input, ENV['JWT_SECRET'], true)
        JWT.decode(token_input, ENV['JWT_SECRET'], true)
    rescue
        render json: { status: 401, message: 'Unauthorized' }
    end

    def get_current_user
        return if !bearer_token
        decoded_jwt = decode_token(bearer_token)
        User..find(decoded_jwt[0]["user"]["id"])
    end

 
end
