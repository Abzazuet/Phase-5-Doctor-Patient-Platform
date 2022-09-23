class FrequenciesController < ApplicationController
  def index
    frequencies = Frequency.all
    render json: frequencies
  end

  def show
    frequency = Frequency.find(params[:id])
    if frequency
      render json: frequency
    else
      render json: { error: "Frequency not in db" }, status: :unprocessable_entity
    end
  end
end
