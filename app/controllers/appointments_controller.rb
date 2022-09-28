class AppointmentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    if params[:doctor_id]
      doctor = Doctor.find(params[:doctor_id])
      appointments = doctor.appointments
    else
      appointments = Appointment.all
    end
    render json: appointments
  end

  def show
    appointment = Appointment.find(params[:id])
    if appointment
      render json: appointment
    else
      render json: { error: "Appointment not found" }, status: :unprocessable_entity
    end
  end

  def create
    appointment = Appointment.create(appointment_params)
    if appointment.valid?
      render json: appointment, status: :created
    else
      render json: { errors: appointment.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    appointment = Appointment.find(params[:id])
    appointment.destroy
    head :no_content
  end

  def update
    appointment = Appointment.find(params[:id])
    if appointment
      appointment.update(appointment_params)
      render json: appointment
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  private

  def appointment_params
    params.permit(:doctor_id, :patient_id, :day, :motive)
  end
  def render_not_found_response
    render json: { error: "Record Not Found" }, status: :not_found
  end
end
