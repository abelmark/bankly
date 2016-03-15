class UsersController < ApplicationController
before_action :is_authenticated?, except: [:new, :create]


  def new
  	@user = User.new
  end

  def create
  	@user = User.create(user_params)
    session[:user_id] = @user.id
  	flash[:success] = "You have successfully signed up!"
  	redirect_to dashboard_path
  end

  def show

  end

  def patch
    @user = @current_user
    uploaded_file = params[:picture].path
    cloudinary_file = Cloudinary::Uploader.upload(uploaded_file)
    render json: cloudinary_file
  end

  private

  def user_params
  	params.require(:user).permit(:name, :email, :password, :password_confirmation, :budget, :income)
  end
end
