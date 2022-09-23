class AppointmentsController < ApplicationController
  def index
    appointments = Appointment.all
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
    render json: patient, status: :created
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
    params.permit(:medicine_id, :frequency_id, :appointment_id, :duration_days)
  end
end
