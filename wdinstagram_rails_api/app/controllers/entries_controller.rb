class EntriesController < ApplicationController
  def index
    @entries = Entry.all
    render json: @entries
  end

  def show
    @entry = Entry.find(params[:id])
    render json: @entry
  end

  def create
    @entry = Entry.create!(entry_params)
    render json: @entry
  end

  def update
    @entry = Entry.find(params[:id])
    @entry.update!(entry_params)
    render json: @entry
  end

  def destroy
    @entry = Entry.find(params[:id])
    @entry.destroy
    render nothing:true
  end

  private
  def entry_params
    params.require(:entry).permit(:photo_url, :author, :body)
  end
end
