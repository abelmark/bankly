class SessionsController < ApplicationController
  def new
  end

  def create
  	user = User.authenticate(user_params[:email], user_params[:password])
  	if user 
  		session[:user_id] = user.id
  		flash[:success] = "You have logged in!"
  		redirect_to dashboard_path
  	else
  		flash[:danger] = "You have not been logged in."
  		redirect_to root_path
  	end
  end

  def destroy 
  	session[:user_id] = nil
  	flash[:success] = "Logged out"
  	redirect_to root_path
  end

  private 

  def user_params
  	params.require(:user).permit(:email, :password)
  end
end
