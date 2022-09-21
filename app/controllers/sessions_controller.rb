class SessionsController < ApplicationController
  def create
    doctor = Doctor.find_by(username: params[:username])
    if Doctor.exists?(username: params[:username])
      if doctor&.authenticate(params[:password])
        session[:user_id] = doctor.id
        render json: doctor, status: :created
      else
        render json: { errors: doctor.errors.full_messages }, status: :unauthorized
      end
    else
      create_blank_user_to_return
    end
  end

  def destroy
    if session[:user_id]
      session.delete :user_id
      head :no_content
    else
      create_blank_user_to_return
    end
  end

  private

  def create_blank_user_to_return
    user = User.new
    user.validate
    render json: { errors: user.errors.full_messages }, status: :unauthorized
  end
end
